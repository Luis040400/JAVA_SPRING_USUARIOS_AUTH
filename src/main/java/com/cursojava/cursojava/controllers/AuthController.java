package com.cursojava.cursojava.controllers;

import com.cursojava.cursojava.dao.UsuarioDao;
import com.cursojava.cursojava.models.Usuario;
import com.cursojava.cursojava.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtutil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario){

        Usuario usuarioLogin = usuarioDao.obtenerUsuarioCredenciales(usuario);
        if(usuarioLogin != null){

            String tokenJWT = jwtutil.create(String.valueOf(usuarioLogin.getId()), usuarioLogin.getEmail());

            return tokenJWT;
        }
        return "FAIL";
    }

}
