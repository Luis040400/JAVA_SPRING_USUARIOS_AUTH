package com.cursojava.cursojava.dao;

import com.cursojava.cursojava.models.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario usuario);

    Usuario obtenerUsuarioCredenciales(Usuario usuario);
}
