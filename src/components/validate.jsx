export const Validate = (data,type)=>{

    const errors = {};

   

   
   

        if (type=== "pay"){
            if(!data.name.trim()){
                errors.name="Name Required"
            }else {
                delete errors.name
            }

            if (!data.num){
                errors.num="Please Enter Your Number's Card"
            }else if (data.num.length <=16){
                errors.num="Number need to be 16 character"
            }
            else {
                delete errors.num
            } 


            if (!data.cvc){
                errors.cvc="CVC Required"
            }else if (data.cvc.length <4){
                errors.cvc="CVC need to be 4 character"
            }
            else {
                delete errors.cvc
            } 

            if(!data.month){
                errors.month="month Required"
            }else {
                delete errors.month
            }
            if(!data.year){
                errors.year="year Required"
            }else {
                delete errors.year
            }


        }

    return errors;

}