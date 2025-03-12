@RestController
@RequestMapping("/api/recommendations")
public class RecommendationController {
    @GetMapping
    public String getRecommendations() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("http://target-clone-ml:8000/recommendations", String.class);
    }
}
