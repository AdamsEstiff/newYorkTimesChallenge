<template>
    <el-row :gutter="24">
        <el-col :span="24">
            <el-card>
                <span v-for="notice in notices">
                    <el-col :span="8">
                        <el-card class="notice_card mt-1">
                            <div slot="header">
                                <img class="image" :src="notice.image">
                            </div>
                            <h1 class="title">{{ notice.title }}</h1>
                            <p class="abstract">{{ notice.abstract }}</p>
                                <a :href="notice.url" class="button-position">
                                    <el-button icon="el-icon-edit">Leer más</el-button>
                                </a>
                        </el-card>
                    </el-col>
                </span>

            </el-card>
        </el-col>
    </el-row>
</template>
<script>
import axios from 'axios';

export default {
    props: ['notices'],
    data() {
        return {
            news: [],
        }
    },
    mounted() {

    }
}
</script>
