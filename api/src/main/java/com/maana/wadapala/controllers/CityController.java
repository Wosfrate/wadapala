package com.maana.wadapala.controllers;

import com.google.gson.Gson;
import com.maana.wadapala.models.CityModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.maana.wadapala.repositories.CityRepo;

import java.util.List;

@RestController
public class CityController {

    @Autowired
    private CityRepo cityRepo;


    @GetMapping("/getCities")
    public ResponseEntity<?> getAllCities(){
        System.out.println("hellooo");
        System.out.println(cityRepo.findAll());
       List<CityModel> cities =  cityRepo.findAll();
        String json = new Gson().toJson(cities );
       return new ResponseEntity<List<CityModel>>(cities, HttpStatus.OK);

    }
}
