function distanceFromHqInBlocks(distance){
    
    
    return Math.abs(distance-42)}

    function distanceFromHqInFeet(distance) {
        return [Math.abs(distance-42)] * 264}

        function distanceTravelledInFeet(num1, num2) {
            return [Math.abs(num1 - num2)] * 264}



            function calculatesFarePrice (start,destination) {
           let travelled;
           if(start > destination){
               travelled = (start - destination) * 264;}
            else{
                travelled = (destination - start) * 264;
            }

            if(travelled < 400) {return 0;}

            if(travelled >= 400 && travelled <= 2000){
             return (travelled - 400) * .02;

            }

            if(travelled > 2000 && travelled <= 2500) {
                return 25;
            }
           else
           {return "cannot travel that far"}}
