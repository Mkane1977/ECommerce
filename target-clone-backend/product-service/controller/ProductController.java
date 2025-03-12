@RestController
@RequestMapping("/api/products")
public class ProductController {
    @GetMapping
    public List<String> getProducts() {
        return List.of("Laptop", "Phone", "Shoes", "Book");
    }
}
