package com.product.system.mapper;

import com.product.system.dto.RegisterRequest;
import com.product.system.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User toEntity(RegisterRequest request);

}