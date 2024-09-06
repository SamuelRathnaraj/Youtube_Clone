export const API_KEY = 'AIzaSyBaih3iVmSMgChofjestg2K6bMVlijpUwQ';

export const value_coverter = (value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+'M';
    }
    else if(value>=1000){
        return Math.floor(value/1000)+'K';

    }
    else{
        return value;
    }
}