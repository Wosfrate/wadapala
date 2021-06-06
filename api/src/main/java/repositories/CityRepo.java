package repositories;


import models.CityModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepo extends MongoRepository<CityModel, String> {
}
