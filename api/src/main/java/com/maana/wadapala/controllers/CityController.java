package com.maana.wadapala.controllers;

import com.google.gson.Gson;
import com.maana.wadapala.models.Bla;
import com.maana.wadapala.models.CityModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.maana.wadapala.repositories.CityRepo;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CityController {


    @Autowired
    private CityRepo cityRepo;


    @GetMapping("/getCities")
    public ResponseEntity<?> getAllCities(){
        System.out.println("hellooo");
        System.out.println(cityRepo.findAll());
       List<CityModel> cities =  cityRepo.findAll();

       if(cities.size() > 0)
       {
           return new ResponseEntity<List<CityModel>>(cities, HttpStatus.OK);
       }
       else{
           return new ResponseEntity<>("Cities List is empty", HttpStatus.NOT_FOUND);
       }


    }
}
