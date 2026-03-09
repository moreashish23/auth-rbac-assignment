package com.product.system.mapper;

import com.product.system.dto.ProductRequest;
import com.product.system.entity.Product;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    Product toEntity(ProductRequest request);

}