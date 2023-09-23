<script>
import Invoice from '../components/Invoice.vue'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      // filterMenu: true // this could be "filterDown - filterMenu"
      filterDown: null
    }
  },
  components: {
    Invoice,
  },
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),

    newInvoice() {
      this.TOGGLE_INVOICE();
      console.log("add invoice");
    },

    toggleFilterMenu() {
      this.filterDown = !this.filterDown;
    }
  },
  computed: {
    ...mapState(['invoiceData']),
  }
}
</script>

<template>
  <div class="home container">
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoice</h1>
        <span>There are {{ invoiceData.length }} total invoices</span>
      </div>

      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex" ref="filter">
          <span>Filter by status</span>
          <!-- <img src="@/assets/logo.svg" alt="" /> -->
          <!-- filterMenu -->
          <ul v-show="filterDown" class="filter-menu">
            <!-- <li>Draft</li> -->
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice" class="button flex">
          <div class="inner-button flex">
            <!-- <img src="@/assets/logo.svg" alt="" /> -->
          </div>
          <span>Add New Invoice</span>
        </div>
      </div>
    </div>

    <div>
      <Invoice v-for="(invoice, index) in invoiceData" :invoice="invoice" :key="index" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  color: #fff;

  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }

    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;

        span {
          font-size: 12px;
        }
      }

      .filter {
        position: relative;
        margin-right: 40px;
        cursor: pointer;

        img {
          margin-left: 12px;
          width: 9px;
          height: 5px;
        }

        .filter-menu {
          width: 120px;
          position: absolute;
          top: 25px;
          list-style: none;
          background-color: #001d3d;
          border-radius: 10px;
          box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);

          li {
            cursor: pointer;
            font-size: 12px;
            padding: 10px 20px;

            &:hover {
              color: #1e2139;
              background-color: #fff;
            }
          }
        }
      }

      .button {
        padding: 8px 10px;
        background-color: #3a86ff;
        border-radius: 40px;

        .inner-button {
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          img {
            width: 10px;
            height: 10px;
          }
        }

        span {
          font-weight: 600;
        }
      }
    }
  }

  .empty {
    margin-top: 160px;
    align-items: center;

    img {
      width: 214px;
      height: 200px;
    }

    h3 {
      font-size: 20px;
      margin-top: 40px;
    }

    p {
      text-align: center;
      max-width: 224px;
      font-size: 12px;
      font-weight: 300;
      margin-top: 16px;
    }
  }
}
</style>
