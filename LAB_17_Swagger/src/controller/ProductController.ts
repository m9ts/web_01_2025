import { TsoaResponse, Route, Tags, Post, Body, Res, Controller, Put } from "tsoa";
import { ProductDto } from "../model/DTO/ProductDto";
import { BasicResponseDto } from "../model/DTO/BasicResponseDto";
import { ProductService } from "../service/ProductService";


@Route("product")
@Tags("Product")
export class ProductController extends Controller {
  productService = new ProductService();
  @Post("Create")
  async insertProduct(
    @Body() dto: ProductDto,
    @Res() fail: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<201, BasicResponseDto>
  ): Promise <  void> {
    try {
      const product = await this.productService.createProduct(dto);
      return success(201, new BasicResponseDto("Produto criado com sucesso!", product));
    } catch (error: any) {
      return fail(400, new BasicResponseDto(error.message, undefined));
    }
  }


  @Put("Update")
  async updateProduct(
    @Body() dto: ProductDto,
    @Res() fail: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
  ): Promise <void> {
    try{
      const product = await this.productService.updateProduct(dto);
      return success(200, new BasicResponseDto("Produto atualizado com sucesso!", product));
    } catch (error: any) {
      return fail(400, new BasicResponseDto(error.message, undefined));
    }
  }
}
