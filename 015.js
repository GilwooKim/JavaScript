var hometown =[
    {name = '김', city = '대구'},
    {name = '이', place = '부산', city = '경상도' },
    {name = '박', place = '울산', city = '경상도' },
    {name = '강', place = '인천', city = '경기도' }
];

var isHometown = function(h, name){
    console.log('함수가 실행되었습니다. ${h..city} 도시에서 ${name} 을 찾습니다.');
    
    if(h.name === name){
        console.log('${h.name} 의 고향은 ${h.city} ${h.place}입니다');
        return true;
    }
    return false;
}

var h;
while (h = hometown.shift()){
    if(!h.name||!h.place||!h.city) continue;

    var result = isHometown(h, '호석');
    if(result) break;
}

var i = 0;
var names = ['이', '강', '최', '최'];
var cities = ['경기', '충청', '대구', '부산'];
do {
    hometown[i] = {name: names[i], city: cities[i]};
    i++;
} while(i<4);

console.log(hometown);