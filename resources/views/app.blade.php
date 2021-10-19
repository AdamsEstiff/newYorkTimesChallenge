<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title> New York Times</title>
    <link rel="icon" type="image/jpg" href="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1491958734/bqp32una36b06hmbulla.png">

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-apexcharts"></script>

    <script src="{{ asset('js/app.js') }}" defer></script>
    <!-- aqui traje para poder utilizar fontawesome aunque no lo termine utilizando -->

    <script src="https://kit.fontawesome.com/26b9f3c10d.js" crossorigin="anonymous"></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- import CSS -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
</head>
<body>
<!--por aqui inicia el proyecto en si-->
@inertia
</body>
</html>
