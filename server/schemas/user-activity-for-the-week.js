import mongoose from 'mongoose'

const ActivityUserSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        first_visit_of_the_day: {
            type: Date,
            default: new Date()
        },
        activity_user: {
            type: Object,
            default: {
                Mon: {
                    number_of_hours: 0,
                    last_date: ''
                },
                Tue: {
                    number_of_hours: 0,
                    last_date: ''
                },
                Wed: {
                    number_of_hours: 0,
                    last_date: ''
                },
                Thu: {
                    number_of_hours: 0,
                    last_date: ''
                },
                Fri: {
                    number_of_hours: 0,
                    last_date: ''
                },
                Sat: {
                    number_of_hours: 0,
                    last_date: ''
                },
                Sub: {
                    number_of_hours: 0,
                    last_date: ''
                },
            }
        }
    },
    {
        timestamps: true
    }
)

ActivityUserSchema.set("toJSON", {
    virtuals: true,
});

const AvtivityUserModal = mongoose.model('AvtivityUser', ActivityUserSchema);

export default AvtivityUserModal;