# High-Level Design (HLD)
## **1. Supplier Registration Form**
### **Overview**
The Supplier Registration module allows suppliers to enter their business details and submit necessary documents for verification.

**Key Components**

* Frontend: Registration form with real-time validation feedback.
* Backend: Handles form submission, document storage, and status updates.
* Database: Stores supplier details and documents securely.
* Notification System: Sends confirmation messages to suppliers upon submission.

**Workflow**
1.	The supplier accesses the registration form.
2.	Enters company details, uploads required documents, and submits the form.
3.	Backend validates input and securely stores data.
4.	Supplier receives a confirmation message.
5.	Data is sent to administrators for verification.
________________________________________

## **2. Supplier Profile Verification**

### **Overview**
Administrators review and verify supplier profiles to ensure legitimacy.

**Key Components**
* Frontend: Supplier verification dashboard for administrators.
* Backend: Fetches pending profiles, verifies documents, and updates the supplier list.
* Database: Stores verification status (Pending, Verified, Rejected).
* Notification System: Sends approval/rejection messages to suppliers.

**Workflow**
1.	Admins log in and access a list of pending supplier profiles.
2.	Review uploaded documents and supplier details.
3.	Choose Verify (profile gets listed) or Reject (requires rejection reason).
4.	System updates verification status in the database.
5.	Supplier receives an email/notification about the decision.
________________________________________
## 3. Purchase Order Creation
### **Overview**
Procurement managers create, manage, and track purchase orders electronically.
Key Components

* Frontend: Purchase Order creation form and tracking dashboard.
* Backend: Processes purchase order submissions and manages order statuses.
* Database: Stores purchase order details, supplier links, and status updates.
* Notification System: Sends confirmation emails/alerts upon creation and updates.

**Workflow**
1.	Procurement manager selects a supplier and enters order details.
2.	Saves the order as a draft or submits it for approval.
3.	Submitted orders are stored in the database with status tracking.
4.	Confirmation notifications are sent.
5.	Managers track progress through the dashboard (Pending, Approved, Completed).

_______________________________________________

### **1. Procurement Dashboard Analytics**
#### **Overview**  
The procurement dashboard provides real-time insights into procurement activities, including spend analysis, supplier performance, and order tracking.

#### **Key Components**  
- **Frontend:** Interactive dashboard with widgets for key metrics.  
- **Backend:** RESTful APIs fetch and aggregate procurement data.  
- **Database:** Stores procurement data with a caching layer for faster queries.  
- **Real-Time Updates:** Implemented via WebSockets or server-sent events.  

#### **Workflow**  
1. User accesses the procurement dashboard.  
2. Dashboard loads widgets displaying spend, supplier ratings, and order statuses.  
3. Filters allow users to refine the displayed data.  
4. Backend fetches aggregated data from the database and caches results.  
5. Users can export data in CSV or PDF format.  
6. Real-time updates push new metrics without requiring a manual refresh.  

---

### **2. Inventory & Order Tracking (Side Panel Access)**
#### **Overview**  
A collapsible side panel provides real-time inventory and order tracking, including alerts for low stock and pending orders.

#### **Key Components**  
- **Frontend:** Side panel UI integrated into all pages.  
- **Backend:** API endpoints fetch inventory and order data.  
- **Database:** Stores stock levels and order statuses.  
- **Alert Mechanism:** Monitors stock levels and triggers alerts.  

#### **Workflow**  
1. User expands the side panel from any page.  
2. Inventory summary and active order statuses are displayed.  
3. Low stock levels or delayed orders trigger visual alerts.  
4. Clicking an alert redirects the user to a detailed view.  
5. Real-time updates ensure stock levels and order statuses are current.  

------------------------------------
----------------------------




# Low-Level Design (LLD)
## 1. Supplier Registration Form
### Frontend Components
* SupplierRegistrationForm.jsx
* Fields: Company Name, Contact Info, Address, Document Upload
* Validation logic for required fields
* API integration for submission

### Backend Endpoints

* POST /api/suppliers/register
    * Validates form input
    * Stores supplier details in the database
    * Sends confirmation response
* GET /api/suppliers/{id}
    * Fetch supplier details for verification

### Database Schema (Supplier Table)
```sql
CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    company_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) UNIQUE NOT NULL,
    address TEXT NOT NULL,
    documents JSON NOT NULL,
    status ENUM('Pending', 'Verified', 'Rejected') DEFAULT 'Pending'
);
```
________________________________________
## 2. Supplier Profile Verification
### Frontend Components
* AdminDashboard.jsx
    * Displays a list of pending supplier profiles
    * "Verify" and "Reject" buttons with a modal for rejection reasons
Backend Endpoints
* GET /api/admin/suppliers/pending
    * Fetches all suppliers with "Pending" status
* POST /api/admin/suppliers/verify/{id}
    * Updates supplier status to "Verified"
* POST /api/admin/suppliers/reject/{id}
    * Updates status to "Rejected" with a reason

**Database Schema Updates**
```sql
ALTER TABLE suppliers ADD COLUMN rejection_reason TEXT NULL;
```
________________________________________
## 3. Purchase Order Creation
### Frontend Components
* PurchaseOrderForm.jsx
    * Fields: Supplier Selection, Items, Quantity, Cost
    * Status tracking UI for submitted orders
### Backend Endpoints
* POST `/api/purchase_orders`
    * Creates a new purchase order
* GET `/api/purchase_orders`
    * Fetches all orders with status filtering
* PUT `/api/purchase_orders/:id`
    * Updates order status

**Database Schema (Purchase Order Table)**
```sql
CREATE TABLE purchase_orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_id INT NOT NULL,
    items JSON NOT NULL,
    total_cost DECIMAL(10,2) NOT NULL,
    status ENUM('Pending', 'Approved', 'Completed') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);
```
---
### **4. Procurement Dashboard Analytics**
#### **Frontend Components**
- **DashboardContainer.jsx**
  - Holds all widgets and ensures responsiveness.  
- **Widgets/Charts:**
  - **Total Spend Widget:** Displays procurement spend trends.  
  - **Supplier Ratings Widget:** Shows supplier performance scores.  
  - **Order Status Widget:** Pie chart representation of order states.  
- **Filters:**
  - Dropdowns and date pickers for data refinement.  
- **Export Functionality:**
  - Uses jsPDF for PDF exports and CSV scripts for data export.  

#### **Backend Services**
- **API Endpoints:**
  - `GET /api/procurement/spend` – Fetches total spend data.  
  - `GET /api/procurement/supplier` – Retrieves supplier performance metrics.  
  - `GET /api/procurement/order-status` – Returns procurement order breakdown.  
  - `GET /api/procurement/export` – Handles CSV/PDF export requests.  
- **Real-Time Data Service:**
  - WebSockets push live updates to the dashboard.  
- **Data Aggregation & Caching:**
  - Scheduled ETL jobs pre-aggregate spend and supplier data.  
  - Redis caching optimizes frequently accessed data.  

#### **Database Schema**
```sql
CREATE TABLE procurement_spend (
    id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_id INT NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    date DATE NOT NULL,
    category VARCHAR(100) NOT NULL,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);

CREATE TABLE supplier_performance (
    supplier_id INT PRIMARY KEY,
    rating DECIMAL(3,2) NOT NULL CHECK (rating BETWEEN 0 AND 5),
    order_fulfillment_rate DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);
```

---

### **5. Inventory & Order Tracking (Side Panel Access)**
#### **Frontend Components**
- **SidePanelContainer.jsx**
  - Collapsible panel that remains accessible across the app.  
- **Summary Widgets:**
  - **Inventory Summary Widget:** Displays stock levels with alerts for low stock.  
  - **Order Status Summary Widget:** Shows pending, shipped, and completed orders.  
- **Alerts Section:**
  - Highlights key issues (e.g., low stock, late orders).  
  - Clickable alerts route to detailed reports.  
- **Navigation:**
  - Integrated into the main app’s routing for smooth transitions.  

#### **Backend Services**
- **API Endpoints:**
  - `GET /api/inventory/summary` – Fetches current stock levels.  
  - `GET /api/orders/active` – Retrieves active order statuses.  
  - `GET /api/alerts` – Provides real-time alerts for stock shortages or delayed orders.  
- **Real-Time Updates:**
  - Polling or WebSockets ensure up-to-date side panel data.  
- **Data Processing:**
  - Backend evaluates stock thresholds and triggers alerts if inventory is low.  

#### **Database Schema**
```sql
CREATE TABLE inventory (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    item_name VARCHAR(255) NOT NULL,
    stock_quantity INT NOT NULL,
    reorder_threshold INT NOT NULL
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_id INT NOT NULL,
    status ENUM('Pending', 'Shipped', 'Completed') NOT NULL,
    expected_delivery DATE,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);
```

---







