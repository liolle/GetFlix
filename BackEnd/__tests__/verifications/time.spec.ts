import {Verif} from "../../src/model/verif";

describe("Timestamp Test ",()=>{

    let date = new Date("2023-03-06T23:50:00")

    it("Date",()=>{
        expect(Verif.getTimeStamp(date)).toEqual("2023-03-06 23:50:00")
    })

    // it("Date",()=>{
    //     expect(Verif.getTimeStamp(date).slice(0, 10)).toEqual("2023-03-06")
    // })

    // it("Time",()=>{
    //     expect(Verif.getTimeStamp(date).slice(11)).toEqual("20:34:00")
    // })
})