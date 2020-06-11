<template>
    <div id="pagination-align">
        <p class="pagination-container">
             <strong><div class="head"> Season Performances </div> </strong>
            <i class="fas fa-angle-double-left" @click="changePage(0)"/>
            <i class="fas fa-angle-left" @click="changePage(-1)"/>
            <span class="inner-pagination-content">
                Page {{ page }} of {{ pages }}
            </span>
            <i class="fas fa-angle-right" @click="changePage(1)"/>
            <i class="fas fa-angle-double-right" @click="changePage(pages)"/>
            <span class="pagination-seperator"></span>
            <!-- Showing: -->
            <span
                class="showing"
                :class="perPage === amount && 'active'"
                v-for="(amount, index) in perPageOptions"
                :key="index"
                @click="setPerPage(amount)"
            ></span>
                
        </p>
    </div>
</template>

<script>
export default {
    props: ['totalRecords', 'perPageOptions'],
    data: function () {
        return {
            page: 1,
            perPage: this.perPageOptions[0]
        }
    },
    computed: {
        pages () {
            const remainder = this.totalRecords % this.perPage
            if (remainder > 0) {
                return Math.floor(this.totalRecords / this.perPage) + 1
            } else {
                return this.totalRecords / this.perPage
            }
        }
    },
    methods: {
        setPerPage(amount) {
            this.perPage = amount
            this.$emit('input', {page: this.page, perPage: amount})
        },
        changePage (val) {
            switch (val) {
                case 0: this.page = 1; break;
                case -1: this.page = this.page > 1 ? this.page - 1 : this.page; break;
                case 1: this.page = this.page < this.pages ? this.page + 1 : this.page; break;
                case this.pages: this.page = this.pages; break;
            }
            this.$emit('input', { page: this.page, perPage: this.perPage })
        }
    }
}
</script>

<style>
#pagination-align{
    width: 92%;
    padding-top:2%;
}
.pagination-container {
    display: flex;
    justify-content: flex-end;
    color: #444;
    margin-right: 20px;
    font-size: 20px;
   
    
}
 .inner-pagination-content {
        display: flex;
        align-items: center;
        margin: 0px 10px;
    }
    
.showing {
        margin: 0px 5px;
        cursor: pointer;
      
    }
    .pagination-seperator, .showing {
        font-size: 16px;
        font-weight: 300;
        color: #888;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 10px;
    }
    .showing {
        margin: 0px 5px;
        cursor: pointer;
        }
        .active {
            color: #2997ff;
        }
.fas {
    width: 20px;
    color: #2997ff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2.5px;
    cursor: pointer;
}
.head{
    padding-right: 600px;
}

       @media only screen and (max-width: 650px) {
           .pagination-container{
               width: 100%;
           }
           .head{
               display: none;
           }
       }
</style>