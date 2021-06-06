package com.maana.wadapala.repositories;


import com.maana.wadapala.models.CityModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepo extends MongoRepository<CityModel, String> {
}
