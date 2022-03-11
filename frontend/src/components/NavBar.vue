<template>
  <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">SPA Kalkulator</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Novo telo</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/prikaz">Vsa telesa</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
