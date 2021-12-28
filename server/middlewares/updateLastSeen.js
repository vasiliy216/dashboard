import { UserModal } from '../schemas/index.js'

const updateLastSeen = (req, res, next) => {
    if (req.user) {
        UserModal.updateOne(
            { _id: req.user._id },
            { last_seen: new Date() },
            () => {}
        );
    }
    next();
}

export default updateLastSeen;