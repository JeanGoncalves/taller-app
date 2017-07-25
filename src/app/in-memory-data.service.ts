import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Enterprise } from './model/enterprise.model';
import { User } from './model/user.model';
import { Product } from './model/product.model';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        let enterprise: Enterprise[] = [
            {
                "id" : 1,
                "name" : "Druptec Soluções",
                "cnpj" : "28.354.669/0001-09",
                "request" : [
                    {
                        "id" : 1,
                        "products" : [
                            {
                                "productId" : 6,
                                "quantity": 2
                            }, {
                                "productId" : 1,
                                "quantity" : 24
                            }, {
                                "productId" : 2,
                                "quantity" : 2
                            }
                        ] 
                    }
                ]
            }, {
                "id" : 2,
                "name" : "BRFoods",
                "cnpj" : "35.577.109/0001-70",
                "request" : [
                    {
                        "id" : 1,
                        "products" : []
                    }
                ]
            }, {
                "id" : 3,
                "name" : "PasquePag",
                "cnpj" : "34.763.818/0001-88",
                "request" : [
                    {
                        "id" : 1,
                        "products" : [] 
                    }
                ]
            }, {
                "id" : 4,
                "name" : "Clubsocial",
                "cnpj" : "21.211.526/0001-90",
                "request" : [
                    {
                        "id" : 1,
                        "products" : [] 
                    }
                ]
            }, {
                "id" : 5,
                "name" : "Bamerindus",
                "cnpj" : "87.487.918/0001-95",
                "request" : [
                    {
                        "id" : 1,
                        "products" : [] 
                    }
                ]
            }, {
                "id" : 6,
                "name" : "Economico",
                "cnpj" : "48.886.574/0001-35",
                "request" : [
                    {
                        "id" : 1,
                        "products" : [] 
                    }
                ]
            }
        ];

        let user: User[] = [
            {
                "id" : 1,
                "name" : "Admin",
                "email": "admin@email.com",
                "password" : "MTIzNDU2Nzg="
            }, {
                "id" : 2,
                "name" : "Teste",
                "email": "teste@email.com",
                "password" : "dGVzdGUxMjM="
            }, 
        ];

        let product: Product[] = [
            { "id" : 1, "name" : "Cerveja" }, 
            { "id" : 2, "name" : "Carne" },
            { "id" : 3, "name" : "Pão de alho" },
            { "id" : 4, "name" : "Refrigerante" },
            { "id" : 5, "name" : "Guardanapo" },
            { "id" : 6, "name" : "Carvão" },
            { "id" : 7, "name" : "Alcool" },
            { "id" : 8, "name" : "Churrasqueira" },
        ];

        return {
            'enterprise' : enterprise,
            'user' : user,
            'product' : product
        };
    }
}
