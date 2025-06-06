import mongoose from "mongoose";

// Creating a schema named orderSchema
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },

    orderItems: [
        {
            name: { type: String, required: true},
            qty: {type: Number, required: true},
            price: {type: Number, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product",
            },
        }
    ],

    shippingAddress: {
        address: {type: String, required: true},
        city: {type:String, required: true},
        postalCode: {type: String, required: true},
        country: {type: String, required: true },
    },

    paymentMethod: {
        type: String,
        required: true,
    },

    paymentStatus: {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String},
    },

    itemPrice: {
        type:Number,
        required: true,
        default: 0.0,
    },

    taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },

    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },

    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },

    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },

    paidAt: {
        type: Date,
    },

    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },

    deliverAt: {
        type: Date
    }

}, {
    timestamps: true,
});

// Exporting the orderSchema as a model
const Order = mongoose.model("Order", orderSchema);
export default Order;