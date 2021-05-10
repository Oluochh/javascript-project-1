class Mkulima{
    constructor(){
        this.farms=[];
        this.vendors=[];
        this.products=[];
        this.orders=[];

    }
    addFarm(farmId,name,farmer,phoneNumber,address){
        let farm={
            farmId:farmId,
            name:name,
            farmer:farmer,
            phoneNumber:phoneNumber,
            address:address,
        }
     this.farms.push(farm)   
    }
    removeFarm(FarmId){
        let farm=this.getfarm(FarmId)
        let index=this.farms.indexOf(farm);
        this.farms.splice(index,1);
        
    }
        var farm={
            FarmId:FarmId,
            name:name,
            phoneNumber:phoneNumber,
            address:address,
        }
        this.farms.push(farm);
    }
    getfarm(FarmId){
        for(var i=0;i<this.farms.length;i++){
            let farm=this.farms[i];
            if(this.farms.FarmId===FarmId){
                return farm;
            }
        }
    }
    addProduct(addProductId,name,price){
        var product={
            ProductId:ProductId,
            name:name,
            price:price,
        }
        
    this.product.push(product);
    }
    getProduct(productId){
        for(var i=0;i<this.product.length;i++){
            let product=this.product[i];
            if(this.product.productId===product){
                return product;
            }
        }
    }
    printProducts(){
        let products=this.getProduct;
        return `${product}costs ${price}`;
    }
    calculateOderCost(productId,quantity){
        var cost=quantity*3000;
        return`${productId}costs ${cost}`;
    }
}
let mkulima=new Mkulima("Gilly's super farm ltd","mangoes","john");
console.log(mkulima.addFarm(76983456,"Billy and Gift","Zainab",99876543,"bamburi"));
console.log(mkulima.farms);
console.log(mkulima.calculateOderCost("beans",88));
console.log(mkulima.removeFarm(6994300));
console.log(mkulima.printProducts);