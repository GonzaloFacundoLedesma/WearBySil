class Router {
    constructor(app) {
        this.app = app;
    }

    route(path) {
        switch (path) {
            case "":
                // caso inicial
                this.app.productos();
                break;
            
            default: 
                this.app.error();
                break;
        }
    }
};