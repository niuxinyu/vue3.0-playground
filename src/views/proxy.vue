<template>
  <h1>proxy</h1>
  <button @click="handleGetValue">获取值</button>
</template>
<script lang='ts' setup=''>
// const person = {
//     name: '牛鑫宇'
// };

// const proxy = new Proxy(person, {
//     get: (target, propKey) => {
//         console.log('通过了 proxy 取值');
//         return Reflect.get(target, propKey);
//     }
// });

// const handleGetValue = () => {
//     console.log(proxy.name);
// };


// const useCreateArray = (...rest: any[]) => {
//     const handler = {
//         get: (target: any [], propKey: any, proxy: any) => {
//             const index = Number(propKey);
//             if (index < 0) {
//                 propKey = String(target.length + index);
//             }
//             return Reflect.get(target, propKey);
//         }
//     };
//     const target = [];
//     target.push(...rest);
//     return new Proxy(target, handler);
// };

// const arr = useCreateArray('a', 'b', 'c');
// console.log(arr[0]);

// const person = Object.defineProperty({}, 'name', {
//     name: '牛鑫宇',
//     writeable: false,
//     configurable: false
// });

// const proxy = new Proxy(person, {
//     get: (target: any, propKey: any) => {
//         return 20;
//     }
// });

// console.log(proxy.name);


const person = {
    name: '牛鑫宇'
};

const obj = Object.defineProperty(person, 'name', {
    get: () => {
        return person.name;
    }
});


</script>
<style lang='less' scoped>

</style>
