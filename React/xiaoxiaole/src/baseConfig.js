/**
 * Created by lzc on 2017/10/10.
 */
//定义游戏的基本属性
export const LINE_COUNT = 8;
export const ROW_COUNT = 8;

//方块的类型
export const BLOCK_TYPES = { 
    BLUE: 'blue',
    RED: 'red',
    ORANGE: 'orange',
    WHITE: 'white',
    BLACK: 'black'
};

//获取随机的方块类型
export function getRandomType () {
    if(typeof BLOCK_TYPES !== 'object'){
        throw 'block types must be an object';
    }
    let typeCount = 0,
        typeArr = [];
    for(let i in BLOCK_TYPES){
        if(BLOCK_TYPES.hasOwnProperty(i)){
            typeCount ++;
            typeArr.push(i);
        }
    }

    let randomTypeNumber = Math.floor(Math.random()*typeCount);
    return BLOCK_TYPES[typeArr[randomTypeNumber]];
}