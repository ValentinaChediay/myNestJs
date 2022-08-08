import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProductsModel} from "./products/products.model";

@Module({
    imports: [
        ProductsModel,
        MongooseModule.forRoot(`mongodb+srv://vala:0609@cluster0.uygxzmk.mongodb.net/?retryWrites=true&w=majority`)
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
