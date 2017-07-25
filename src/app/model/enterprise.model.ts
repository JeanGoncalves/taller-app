export class Enterprise {

    constructor (
        public id: number,
        public name: string,
        public cnpj: string,
        public request: Request[]
    ) {}
}

class Request {

    constructor (
        public id: number,
        public products: Products[]
    ) {}
}

class Products {

    constructor (
        public productId: number,
        public quantity: number
    ) {}
}