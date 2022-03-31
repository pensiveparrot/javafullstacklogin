package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class LoginController {
	@Autowired
	LoginRepository loginRepository;

	@PostMapping("/login")
	public ResponseEntity<LoginModel> login(@Validated @RequestBody LoginModel loginData) {

		LoginModel loginObj = loginRepository.findByUsername(loginData.getUsername());
		if (loginObj.getPassword().equals(loginData.getPassword())
				&& loginObj.getUsername().equals(loginData.getUsername()))
			return new ResponseEntity<LoginModel>(loginObj, HttpStatus.OK);
		return new ResponseEntity<LoginModel>(loginObj, HttpStatus.BAD_REQUEST);

	}

}