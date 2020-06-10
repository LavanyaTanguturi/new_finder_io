<template>
  <div class="fd-pad-20">
    <ul id="example-1" class="fd-ul">
      <!-- <li v-for="email in emails" :key="email.email">
        {{ email.email }}
        {{ getSrc(email.src) }}
        <p v-if="showCategory">{{ email.category }}</p>

        {{ len(email.src) }}

        <b @click="showModal(email)">+</b>
      </li> -->

      <li v-for="email in emails" :key="email.email" >
        <div class="fd-parent">
           <div class="fd-w-60">
             <strong class="fd-name">Prasad Nelluri <small class="fd-person-txt"> Personal</small> </strong>
            <div class="fd-flex">
               <small class="fd-mail-txt">{{ email.email }} </small> 
               <img src='../../assets/verified.png'>
            </div>
           </div>
           <div class="fd-w-10">
             <span class="fd-fs-12 fd-fw g-color"> 55 %  </span>
           </div>
           <div class="fd-w-10 add-existiong-list ">
              <b-dropdown toggle-class=""  >
                    <div slot="button-content" class="m-0 p-0" >  
                      <img src='../../assets/add.png' />
                    </div>
                      <div class="fd-existing-list-form">
                        <h5> Add to Existing List</h5>
                         <div class="fd-select-parent">
                          <b-form-select  class="fd-existiong-list-box" v-model="selected" :options="options">
                          </b-form-select>
                          <img src="../../assets/down-arrow.png"  class="select-arrow"   />
                        </div>
                        <div class="fd-divide-cont">
                          <span class="fw"> Or <span class="fd-b-color fw"> Create your list </span> </span>
                        </div>
                        <div>
                          <b-form-input v-model="text" class="fd-add-field"></b-form-input>
                           <b-button class="fd-create-btn">Add</b-button>
                        </div>

                      </div> 
                </b-dropdown>

           </div>
           <div class="fd-w-20 fd-sourse-list">
            <div class="fd-flex-cont p-relative" >  
           
                <b-dropdown toggle-class=""  >
                    <div slot="button-content" class="m-0 p-0" >  
                      <span  class="fd-sourse-txt"> 1  sourse </span>  
                      <img src="../../assets/down-arrow.png"  class="fd-img-size"   />
                    </div>
                      <AddList :email="selectedEmail"></AddList> 
                </b-dropdown>

               </div>
           </div>
        </div>
      </li> 
    </ul>

    <!-- Add Selected Email in Add List Popup -->
    <b-modal id="modal" ref="modal" title="Add to List">
      <b-container>
        <AddList :email="selectedEmail">
          
        </AddList>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import AddList from "./add-list";
import './style.css';
export default {
  props: ["emails", "showCategory"],
  data() {
    return {
      selectedEmail: "hello",
      options: [
          { value: null, text: 'Select List' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
    };
  },
  components: { AddList },
  methods: {
    getSrc: function(src) {
      let sources = src.split("|FINDERIO|");
      sources = sources.map((item) => {
        if (item.startsWith("/") || item.startsWith('"')) item = item.substring(1);
        if (item.endsWith("/") || item.endsWith('"')) item = item.substring(-1);
        return item;
      });
      return sources;
    },
    len: function(arr) {
      return this.getSrc(arr).length;
    },
    showModal(email) {
      this.selectedEmail = email;
      this.$refs["modal"].show();
    },
  },
};
</script>


<style lang="css" scoped>

.fd-flex-cont{
  display: flex;
    align-items: center;
}
</style>


