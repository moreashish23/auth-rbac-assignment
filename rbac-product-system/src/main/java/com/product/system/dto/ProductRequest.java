package com.product.system.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ProductRequest {


    @NotBlank
    private String name;
    @NotBlank
    private Double price;
    @NotBlank
    private String description;

}