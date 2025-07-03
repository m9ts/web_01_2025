import { TsoaResponse, Route, Tags, Post, Body, Res, Controller } from "tsoa";
import { ProductDto } from "../model/DTO/ProductDto";
import { BasicResponseDto } from "../model/DTO/BasicResponseDto";
import { ProductService } from "../service/ProductService";


@Route("product")
@Tags("Product")
export class ProductController extends Controller {
  productService = new ProductService();
  @Post()
  async cadastrarProduto(
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
}
/*
  async atualizarProduto(req: Request, res: Response) {
    try {
      const message = await this.productService.updateProduct(req.body);
      res.status(200).json({ message });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro ao atualizar o produto.';
      res.status(400).json({ message });
    }
  }
}
*/