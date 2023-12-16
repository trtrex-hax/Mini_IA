import {Schema, Model} from "mongoose"


const EmergencyContact =Schema({



})


const Patient = Schema({
 PatientID:string,
 surname: string,
 OtherNames: string,
 



})

export const PatientModel = Model(Patients, "patients")