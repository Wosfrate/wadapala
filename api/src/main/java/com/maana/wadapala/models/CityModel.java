package com.maana.wadapala.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "cities")
public class CityModel {
    @Id
    private int id;
    private String city;
}
