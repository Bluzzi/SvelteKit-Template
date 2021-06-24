<script>
    import dayjs from "dayjs";

    let currentTime = "";

    let timeUpdate = () => {
        currentTime = dayjs().format("H [hours,] m [minutes,] s [seconds]");
    }

    timeUpdate();
    setInterval(timeUpdate, 1000);
</script>

<p>{currentTime}</p>