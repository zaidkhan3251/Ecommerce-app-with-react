import React from 'react'
import { BsLayoutThreeColumns } from 'react-icons/bs'
const initState={
    products:[
        {id:1,name:"man t-shirt",image:"1.jpg",price:20,discount:2,discountPrice:20-2/100*20,quantity:1,desc:"bhvbdkrg kerbsvnger evrkgadvboeair ekdrabverduhg gerskbdvaaurkfbnevr vnslkvklanve erkgnvoirted erdgnvworieg rtdibnrosdfb rdongm2ord rotegnvtriwod oerikngvoirewdghnv fbnrtoid trdfknbrito rtofdgnbrtoig ortgnoirtnh rtegnbtrwgdnm4wd ortengviorwe"},
        {id:2,name:"man t-shirt",image:"2.jpg",price:30,discount:3,discountPrice:30-3/100*30,quantity:1,desc:"bhvbdkrg kerbsvnger evrkgadvboeair ekdrabverduhg gerskbdvaaurkfbnevr vnslkvklanve erkgnvoirted erdgnvworieg rtdibnrosdfb rdongm2ord rotegnvtriwod oerikngvoirewdghnv fbnrtoid trdfknbrito rtofdgnbrtoig ortgnoirtnh rtegnbtrwgdnm4wd ortengviorwe"},
        {id:3,name:"man t-shirt",image:"3.jpg",price:40,discount:4,discountPrice:40-4/100*40,quantity:1,desc:"bhvbdkrg kerbsvnger evrkgadvboeair ekdrabverduhg gerskbdvaaurkfbnevr vnslkvklanve erkgnvoirted erdgnvworieg rtdibnrosdfb rdongm2ord rotegnvtriwod oerikngvoirewdghnv fbnrtoid trdfknbrito rtofdgnbrtoig ortgnoirtnh rtegnbtrwgdnm4wd ortengviorwe"},
        {id:4,name:"man t-shirt",image:"4.jpg",price:50,discount:5,discountPrice:50-5/100*50,quantity:1,desc:"bhvbdkrg kerbsvnger evrkgadvboeair ekdrabverduhg gerskbdvaaurkfbnevr vnslkvklanve erkgnvoirted erdgnvworieg rtdibnrosdfb rdongm2ord rotegnvtriwod oerikngvoirewdghnv fbnrtoid trdfknbrito rtofdgnbrtoig ortgnoirtnh rtegnbtrwgdnm4wd ortengviorwe"},
        {id:5,name:"boys Track-Suit",image:"5.jpg",price:60,discount:6,discountPrice:60-6/100*60,quantity:1,desc:"bhvbdkrg kerbsvnger evrkgadvboeair ekdrabverduhg gerskbdvaaurkfbnevr vnslkvklanve erkgnvoirted erdgnvworieg rtdibnrongm2ord rotegnvtriwod oerikngvoirewdghnv sdfb rdofbnrtoid trdfknbrito rtofdgnbrtoig ortgnoirtnh rtegnbtrwgdnm4wd ortengviorwe"},
        {id:6,name:"boys Track-Suit",image:"6.jpg",price:70,discount:7,discountPrice:70-7/100*70,quantity:1,desc:"bhvbdkrg kerbsvnger evrkgadvboeair ekdrabverduhg gerskbdvaaurkfbnevr vnslkvklanve erkgnvoirted erdgnvworieg rtdibnrongm2ord rotegnvtriwod oerikngvoirewdghnv sdfb rdofbnrtoid trdfknbrito rtofdgnbrtoig ortgnoirtnh rtegnbtrwgdnm4wd ortengviorwe"},
        {id:7,name:"boys Track-Suit",image:"7.jpg",price:80,discount:8,discountPrice:80-8/100*80,quantity:1,desc:"bhvbdkrg kerbsvnger evrkgadvboeair ekdrabverduhg gerskbdvaaurkfbnevr vnslkvklanve erkgnvoirted erdgnvworieg rtdibnrongm2ord rotegnvtriwod oerikngvoirewdghnv sdfb rdofbnrtoid trdfknbrito rtofdgnbrtoig ortgnoirtnh rtegnbtrwgdnm4wd ortengviorwe"},
        {id:8,name:"boys Track-Suit",image:"8.jpg",price:90,discount:9,discountPrice:90-9/100*90,quantity:1,desc:"bhvbdkrg kerbsvnger evrkgadvboeair ekdrabverduhg gerskbdvaaurkfbnevr vnslkvklanve erkgnvoirted erdgnvworieg rtdibnrongm2ord rotegnvtriwod oerikngvoirewdghnv sdfb rdofbnrtoid trdfknbrito rtofdgnbrtoig ortgnoirtnh rtegnbtrwgdnm4wd ortengviorwe"},
        {id:9,name:"Boys Shoes",image:"9.jpg",price:100,discount:10,discountPrice:100-10/100*100,quantity:1,desc:"bhvbdkrg kerbsvnger evrkgadvboeair ekdrabverduhg gerskbdvaaurkfbnevr vnslkvklanve erkgnvoirted erdgnvworieg rtdibnrongm2ord rotegnvtriwod oerikngvoirewdghnv sdfb rdofbnrtoid trdfknbrito rtofdgnbrtoig ortgnoirtnh rtegnbtrwgdnm4wd ortengviorwe"},
        {id:10,name:"Boys Shoes",image:"10.jpg",price:110,discount:11,discountPrice:110-11/100*110,quantity:1,desc:"bhvbdkrg kerbsvnger evrkgadvboeair ekdrabverduhg gerskbdvaaurkfbnevr vnslkvklanve erkgnvoirted erdgnvworieg rtdibnrongm2ord rotegnvtriwod oerikngvoirewdghnv sdfb rdofbnrtoid trdfknbrito rtofdgnbrtoig ortgnoirtnh rtegnbtrwgdnm4wd ortengviorwe"},
        {id:11,name:"Boys Shoes",image:"11.jpg",price:120,discount:12,discountPrice:120-12/100*120,quantity:1,desc:"bhvbdkrg kerbsvnger evrkgadvboeair ekdrabverduhg gerskbdvaaurkfbnevr vnslkvklanve erkgnvoirted erdgnvworieg rtdibnrongm2ord rotegnvtriwod oerikngvoirewdghnv sdfb rdofbnrtoid trdfknbrito rtofdgnbrtoig ortgnoirtnh rtegnbtrwgdnm4wd ortengviorwe"},
        {id:12,name:"Women Bag",image:"12.jpg",price:130,discount:13,discountPrice:130-13/100*130,quantity:1,desc:"bhvbdkrg kerbsvnger evrkgadvboeair ekdrabverduhg gerskbdvaaurkfbnevr vnslkvklanve erkgnvoirted erdgnvworieg rtdibnrongm2ord rotegnvtriwod oerikngvoirewdghnv sdfb rdofbnrtoid trdfknbrito rtofdgnbrtoig ortgnoirtnh rtegnbtrwgdnm4wd ortengviorwe"}
    ], 
    product:{}
}
const ProductsReducer = (state=initState,action) => {
    switch(action.type){
        case "PRODUCT" :
        return {...state,product:state.products.find(product=> product.id=== parseInt(action.id))}
        default:
            return state;
    }
}

export default ProductsReducer;
