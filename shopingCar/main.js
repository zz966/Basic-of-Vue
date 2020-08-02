const app = new Vue({
    el:'#app',
    data:{
        books:[
            {
            id:1,
            name:'book1',
            date:'2009-1-1',
            price:85.00,
            count:1

        },
        {
            id:2,
            name:'book2',
            date:'2009-1-1',
            price:95.00,
            count:1

        },
        {
            id:3,
            name:'book3',
            date:'2009-1-1',
            price:105.00,
            count:1

        },
        {
            id:4,
            name:'book4',
            date:'2009-1-1',
            price:115.00,
            count:1

        },
        {
            id:5,
            name:'book5',
            date:'2009-1-1',
            price:125.00,
            count:1

        }]
    },
    methods:{
        increment(index){
            this.books[index].count++;
        },
        decrement(index){
            this.books[index].count--;
        },
        removeClick(index){
            this.books.splice(index,1);
        }
    },
    computed:{
        totalPrice(){
            //1.for loop
            // let totalPrice =0;
            // for(let i =0;i<this.books.length;i++)
            // {
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            // return totalPrice;

            // 2.for(let i in this.books)
            // let totalPrice = 0;
            // for(let i in this.books){
            //     const book = this.books[i];
            //     totalPrice += book.price * book.count;
            // }
            // return totalPrice;

            //3.for(let i of this.books)
            // let totalPrice = 0;
            // for(let item of this.books){
            //     totalPrice += item.price * item.count;
            // }
            // return totalPrice;

            //reduce 
            let totalPrice =  this.books.reduce(function(preValue, book){
                return  preValue + book.price* book.count;
            },0 );
            return totalPrice;
            

        }
    },
    filters:{
        showPrice(price){
            return "$" + price.toFixed(2)
        }
    }

})