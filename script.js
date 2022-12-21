/*Question-1 */

function aLp(){
    let STR=['a','b','c','a','d','e','e','c','f','b'];
    let s=new Set(); 
    for(let i=0;i<STR.length;i++){
        s.add(STR[i]);

    }
     console.log(s);

}
aLp();

/*Question-2 */

function mAp(){
    let s="abcadeecfb";
    let map=new Map();
    for (let i=0; i<s.length;i++){
        if(map.has(s[i])){
            let value=map.get(s[i]);
            map.set(s[i],value+1);
        }
        else{
            map.set(s[i],1);
        }
       
    }
    for(let [k,v] of map){
        console.log(k +"-->"+v)
    }

}
mAp();
