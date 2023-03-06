import {Verif} from "../../src/model/verif";

describe("Verif Test ",()=>{

    let date = new Date("2023-03-06T23:50:00")
    let localUTC = date.toLocaleString('fr-FR', { timeZone: 'UTC' })
    //"06/03/2023 22:50:00"

    it("Date",()=>{
        expect(Verif.getTimeStamp(date,"dd-mm-yyyy",'/')).toEqual(localUTC)
    })


    let token = Verif.generateToken(200)
    it("Token size",async()=>{
        expect(token).toHaveLength(200)
        
    })

})