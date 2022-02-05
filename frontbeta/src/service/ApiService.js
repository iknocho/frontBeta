import { API_BASE_URL } from "../app-config";

export function call(api,method,request){
    const options={//header,method,(url),(body)
        headers:{
            "Content-Type":"application/json",
        },
        url:API_BASE_URL+api,
        method:method,
    };
    console.log(options.url);

    if(request){//GET은 요청이 필요없을 듯?
        options.body=JSON.stringify(request);
    }
    return fetch(options.url,options).then((response)=>
        response.json().then((json)=>{
            if(!response.ok){
                //response.ok 가 true면 정상적인 응답을 받은것이고 아니면 에러 응답을 받은것
                return Promise.reject(json);
            }
            return json;
        }) 
    )
}
