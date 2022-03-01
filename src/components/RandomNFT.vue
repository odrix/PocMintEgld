<template>
    <div id="imgRandom"
         :style="{'background-position-x': x*180 + 'px',
                  'background-position-y': y*180 + 'px' }"></div>
</template>

<script>
export default {
    data () {
        return {
            x: 0,
            y: 0
        };
    },
    mounted () {
        setInterval(this.next, 450);
    },
    methods: {
        next() {
            this.x++;
            if(this.x > 20) {
                this.y++;
                this.x = 0;
            }

            if(this.y > 5) {
                this.y = 0;
            }
        }
    }
}
</script>

<style scoped>
#imgRandom {
    width: 180px;
    height: 180px;
    background-image: url('~@/assets/preview.png');
    background-position: 59px 59px;
    background-size: 3600px 900px;
}
</style>