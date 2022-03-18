
<template>
    <div class="col-xl-2 p-0 mw_menus"  :class="{'active':!$store.state.isactive}">
      <div class="side_menus ">
      <div class="nav">
        <div class="nav-items">
          <router-link to="/" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Слайдер</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/document/category" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Категории документов</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/journal" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Журнал</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/document" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Файлы и документы</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/managment/category" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Категории управления</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/managment" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Управление</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/files" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Медиатека</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/museum" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Музеи</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/news" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Новости</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/organization" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Подведомственные организации</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/press-secretary" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Пресс-секретарь</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/services" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Услуги</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/stats" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Статистика</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/structure" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Структура</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/territorial" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Территориальные управления</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/vacancy" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Вакансии</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/object" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Объекты ЮНЕСКО</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/about" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">О нас</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/subs" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Подписка</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/opendata" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Открытые данные</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/objects_category" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Категории Объекты</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/objects" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Объекты</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/appeal" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Центр связи</span>
          </router-link>
        </div>
        <div class="nav-items">
          <router-link to="/contact" class="nav-link d-flex align-items-center">
            <span class="sidebar-text">Контакты</span>
          </router-link>
        </div>
      </div>
    </div>
      </div>
</template>
<style>
.mw_menus{
  max-width: 100%;
  transition: .3s;
}
.side_menus{
  background: white;
  z-index: 333;
  padding-top: 70px;
  overflow-x: hidden;
  padding-left: 15px;
  height: 100%;
}
.mw_menus.active{
  max-width: 0;
  transition: .3s;
}
.nav-items{
  display: block;
  width: 100%;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.nav-items:hover a{
  background: #4B49AC;
  border-radius: 5px;
  color: #ffffff;
}
.router-link-exact-active.router-link-active{
  background: #4B49AC;
  border-radius: 5px;
  color: #ffffff;
}

</style>
