import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    userId : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name : { type: String, required: true },
    email : { type: String, required: true },
    photo : { type: String, default: "https://imgs.search.brave.com/Tnf2-DKXvnBkslp0A8cvo2bblj8ThNVXh9Oti3zao58/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/NzE0NDE0Ni92ZWN0/b3IvZGVmYXVsdC1h/dmF0YXItcHJvZmls/ZS1pY29uLXZlY3Rv/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QkliRnd1djdG/eFRXdmg1UzN2QjZi/a1QwUXY4Vm44TjVG/ZnNlcTg0Q2xHST0" },
    title : { type: String, default: null },  
    location : { type: String, default: null },
    bio : { type: String, default: null },
    languages : { type: [String], default: [] },
    skills : { type: [String], default: [] },
    showExp : {type: [String], default: []},    
    Experience : { type: Number, default: 0 },
    feedback : { type :[String], default: [] },
    education: {type :[{degree: String , institution: String, year: Number}], default: []},
    certifications: {type :[String], default: []},
    feedback : {type: [{name: String, photo: String, comment: String, date: { type: Date, default: Date.now }}], default: []},
    gigs : {type: [{title: String, photo: String, description: String, price:String , deliveryDate : String}], default: []},

})

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;