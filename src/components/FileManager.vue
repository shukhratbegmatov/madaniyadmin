<template>
  <div>
    <div class="container flex-grow-1 light-style container-p-y">
      <div class="container-m-nx container-m-ny bg-lightest mb-3">
        <ol class="breadcrumb text-big container-p-x py-3 m-0">
          <li class="breadcrumb-item">
            <a href="javascript:void(0)">home</a>
          </li>
          <li class="breadcrumb-item active">Files</li>
        </ol>

        <hr class="m-0" />

        <div class="file-manager-actions container-p-x py-2">
<!--          <div>-->
<!--            <input type="file" class="d-none" id="f_manage">-->
<!--            <label for="f_manage" class="files-buttons btn btn-primary mr-2">-->
<!--              <i class="ion ion-md-cloud-upload"></i>Upload</label>-->
<!--          </div>-->

            <div class="files_buttons">
              <div class="child_files" :class="{'active':is_files==0}">
                <button @click="getManagement();is_files=0">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.4925 10.1743L28.0295 4.31533L6.3125 9.03733V55.9333C6.3125 57.6113 7.4035 60.7733 11.5415 60.7733C13.1685 60.7733 15.1475 60.2713 17.3935 59.2893L55.9665 43.9843V3.23633L28.4925 10.1743" fill="#243438"/>
                    <path d="M55.5505 1.71198C47.0085 3.86598 38.4605 6.02498 29.9245 8.17698C29.8225 6.89198 29.7185 5.60298 29.6195 4.31598C29.5315 3.25498 28.6725 2.55398 27.6095 2.78498L5.89247 7.50698C5.20947 7.65698 4.73047 8.35898 4.73047 9.03798V55.73C4.73047 58.36 6.22047 60.985 8.79647 61.878C12.0715 63.017 15.3375 61.798 18.3905 60.581C31.0645 55.561 43.7275 50.541 56.3905 45.511C57.0585 45.247 57.5545 44.747 57.5545 43.982V3.23398C57.5535 2.19198 56.5425 1.45798 55.5445 1.70998L55.5505 1.71198ZM9.14447 58.519C7.72547 57.658 7.89447 55.797 7.89447 54.386V10.304C14.1285 8.94998 20.3605 7.59698 26.5925 6.23898C26.6955 7.55198 26.8005 8.86098 26.9055 10.17C26.9285 10.498 27.0385 10.768 27.1985 10.988C27.5185 11.529 28.1225 11.898 28.9105 11.699C37.4015 9.55398 45.8895 7.41198 54.3805 5.26898V42.917C44.3005 46.915 34.2105 50.915 24.1305 54.915C20.4045 56.39 12.7715 60.724 9.14147 58.515" fill="#B77846"/>
                    <path d="M7.69922 17.4079V55.3669C7.69922 55.3669 7.69922 61.9849 17.3042 57.7929L54.5842 43.0079V4.83789L27.7732 11.6019L27.3232 5.78589L7.70122 10.0549V17.4119" fill="#D69661"/>
                    <path d="M7.69922 56.569C7.69922 56.569 7.69922 62.936 17.3042 58.903L54.5842 44.68L56.4082 7.95703C41.0562 11.782 23.8622 16.76 9.52422 20.007C9.02622 32.533 8.32622 44.047 7.70122 56.573" fill="#E5B687"/>
                  </svg>
                </button>
                <div>
                  Management
                </div>
              </div>
              <div class="child_files" :class="{'active':is_files==1}">
                <button @click="getHeritage();is_files=1">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.4925 10.1743L28.0295 4.31533L6.3125 9.03733V55.9333C6.3125 57.6113 7.4035 60.7733 11.5415 60.7733C13.1685 60.7733 15.1475 60.2713 17.3935 59.2893L55.9665 43.9843V3.23633L28.4925 10.1743" fill="#243438"/>
                    <path d="M55.5505 1.71198C47.0085 3.86598 38.4605 6.02498 29.9245 8.17698C29.8225 6.89198 29.7185 5.60298 29.6195 4.31598C29.5315 3.25498 28.6725 2.55398 27.6095 2.78498L5.89247 7.50698C5.20947 7.65698 4.73047 8.35898 4.73047 9.03798V55.73C4.73047 58.36 6.22047 60.985 8.79647 61.878C12.0715 63.017 15.3375 61.798 18.3905 60.581C31.0645 55.561 43.7275 50.541 56.3905 45.511C57.0585 45.247 57.5545 44.747 57.5545 43.982V3.23398C57.5535 2.19198 56.5425 1.45798 55.5445 1.70998L55.5505 1.71198ZM9.14447 58.519C7.72547 57.658 7.89447 55.797 7.89447 54.386V10.304C14.1285 8.94998 20.3605 7.59698 26.5925 6.23898C26.6955 7.55198 26.8005 8.86098 26.9055 10.17C26.9285 10.498 27.0385 10.768 27.1985 10.988C27.5185 11.529 28.1225 11.898 28.9105 11.699C37.4015 9.55398 45.8895 7.41198 54.3805 5.26898V42.917C44.3005 46.915 34.2105 50.915 24.1305 54.915C20.4045 56.39 12.7715 60.724 9.14147 58.515" fill="#B77846"/>
                    <path d="M7.69922 17.4079V55.3669C7.69922 55.3669 7.69922 61.9849 17.3042 57.7929L54.5842 43.0079V4.83789L27.7732 11.6019L27.3232 5.78589L7.70122 10.0549V17.4119" fill="#D69661"/>
                    <path d="M7.69922 56.569C7.69922 56.569 7.69922 62.936 17.3042 58.903L54.5842 44.68L56.4082 7.95703C41.0562 11.782 23.8622 16.76 9.52422 20.007C9.02622 32.533 8.32622 44.047 7.70122 56.573" fill="#E5B687"/>
                  </svg>
                </button>
                <div>
                  Heritage
                </div>
              </div>

              <div class="child_files" :class="{'active':is_files==2}">
                <button @click="getMuseum();is_files=2">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.4925 10.1743L28.0295 4.31533L6.3125 9.03733V55.9333C6.3125 57.6113 7.4035 60.7733 11.5415 60.7733C13.1685 60.7733 15.1475 60.2713 17.3935 59.2893L55.9665 43.9843V3.23633L28.4925 10.1743" fill="#243438"/>
                    <path d="M55.5505 1.71198C47.0085 3.86598 38.4605 6.02498 29.9245 8.17698C29.8225 6.89198 29.7185 5.60298 29.6195 4.31598C29.5315 3.25498 28.6725 2.55398 27.6095 2.78498L5.89247 7.50698C5.20947 7.65698 4.73047 8.35898 4.73047 9.03798V55.73C4.73047 58.36 6.22047 60.985 8.79647 61.878C12.0715 63.017 15.3375 61.798 18.3905 60.581C31.0645 55.561 43.7275 50.541 56.3905 45.511C57.0585 45.247 57.5545 44.747 57.5545 43.982V3.23398C57.5535 2.19198 56.5425 1.45798 55.5445 1.70998L55.5505 1.71198ZM9.14447 58.519C7.72547 57.658 7.89447 55.797 7.89447 54.386V10.304C14.1285 8.94998 20.3605 7.59698 26.5925 6.23898C26.6955 7.55198 26.8005 8.86098 26.9055 10.17C26.9285 10.498 27.0385 10.768 27.1985 10.988C27.5185 11.529 28.1225 11.898 28.9105 11.699C37.4015 9.55398 45.8895 7.41198 54.3805 5.26898V42.917C44.3005 46.915 34.2105 50.915 24.1305 54.915C20.4045 56.39 12.7715 60.724 9.14147 58.515" fill="#B77846"/>
                    <path d="M7.69922 17.4079V55.3669C7.69922 55.3669 7.69922 61.9849 17.3042 57.7929L54.5842 43.0079V4.83789L27.7732 11.6019L27.3232 5.78589L7.70122 10.0549V17.4119" fill="#D69661"/>
                    <path d="M7.69922 56.569C7.69922 56.569 7.69922 62.936 17.3042 58.903L54.5842 44.68L56.4082 7.95703C41.0562 11.782 23.8622 16.76 9.52422 20.007C9.02622 32.533 8.32622 44.047 7.70122 56.573" fill="#E5B687"/>
                  </svg>
                </button>
                <div>
                  Museum
                </div>
              </div>
              <div class="child_files" :class="{'active':is_files==3}">
                <button @click="getSlider();is_files=3">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.4925 10.1743L28.0295 4.31533L6.3125 9.03733V55.9333C6.3125 57.6113 7.4035 60.7733 11.5415 60.7733C13.1685 60.7733 15.1475 60.2713 17.3935 59.2893L55.9665 43.9843V3.23633L28.4925 10.1743" fill="#243438"/>
                    <path d="M55.5505 1.71198C47.0085 3.86598 38.4605 6.02498 29.9245 8.17698C29.8225 6.89198 29.7185 5.60298 29.6195 4.31598C29.5315 3.25498 28.6725 2.55398 27.6095 2.78498L5.89247 7.50698C5.20947 7.65698 4.73047 8.35898 4.73047 9.03798V55.73C4.73047 58.36 6.22047 60.985 8.79647 61.878C12.0715 63.017 15.3375 61.798 18.3905 60.581C31.0645 55.561 43.7275 50.541 56.3905 45.511C57.0585 45.247 57.5545 44.747 57.5545 43.982V3.23398C57.5535 2.19198 56.5425 1.45798 55.5445 1.70998L55.5505 1.71198ZM9.14447 58.519C7.72547 57.658 7.89447 55.797 7.89447 54.386V10.304C14.1285 8.94998 20.3605 7.59698 26.5925 6.23898C26.6955 7.55198 26.8005 8.86098 26.9055 10.17C26.9285 10.498 27.0385 10.768 27.1985 10.988C27.5185 11.529 28.1225 11.898 28.9105 11.699C37.4015 9.55398 45.8895 7.41198 54.3805 5.26898V42.917C44.3005 46.915 34.2105 50.915 24.1305 54.915C20.4045 56.39 12.7715 60.724 9.14147 58.515" fill="#B77846"/>
                    <path d="M7.69922 17.4079V55.3669C7.69922 55.3669 7.69922 61.9849 17.3042 57.7929L54.5842 43.0079V4.83789L27.7732 11.6019L27.3232 5.78589L7.70122 10.0549V17.4119" fill="#D69661"/>
                    <path d="M7.69922 56.569C7.69922 56.569 7.69922 62.936 17.3042 58.903L54.5842 44.68L56.4082 7.95703C41.0562 11.782 23.8622 16.76 9.52422 20.007C9.02622 32.533 8.32622 44.047 7.70122 56.573" fill="#E5B687"/>
                  </svg>
                </button>
                <div>
                  Slider
                </div>
              </div>

              <div class="child_files" :class="{'active':is_files==4}">
                <button @click="getNews();is_files=4">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.4925 10.1743L28.0295 4.31533L6.3125 9.03733V55.9333C6.3125 57.6113 7.4035 60.7733 11.5415 60.7733C13.1685 60.7733 15.1475 60.2713 17.3935 59.2893L55.9665 43.9843V3.23633L28.4925 10.1743" fill="#243438"/>
                    <path d="M55.5505 1.71198C47.0085 3.86598 38.4605 6.02498 29.9245 8.17698C29.8225 6.89198 29.7185 5.60298 29.6195 4.31598C29.5315 3.25498 28.6725 2.55398 27.6095 2.78498L5.89247 7.50698C5.20947 7.65698 4.73047 8.35898 4.73047 9.03798V55.73C4.73047 58.36 6.22047 60.985 8.79647 61.878C12.0715 63.017 15.3375 61.798 18.3905 60.581C31.0645 55.561 43.7275 50.541 56.3905 45.511C57.0585 45.247 57.5545 44.747 57.5545 43.982V3.23398C57.5535 2.19198 56.5425 1.45798 55.5445 1.70998L55.5505 1.71198ZM9.14447 58.519C7.72547 57.658 7.89447 55.797 7.89447 54.386V10.304C14.1285 8.94998 20.3605 7.59698 26.5925 6.23898C26.6955 7.55198 26.8005 8.86098 26.9055 10.17C26.9285 10.498 27.0385 10.768 27.1985 10.988C27.5185 11.529 28.1225 11.898 28.9105 11.699C37.4015 9.55398 45.8895 7.41198 54.3805 5.26898V42.917C44.3005 46.915 34.2105 50.915 24.1305 54.915C20.4045 56.39 12.7715 60.724 9.14147 58.515" fill="#B77846"/>
                    <path d="M7.69922 17.4079V55.3669C7.69922 55.3669 7.69922 61.9849 17.3042 57.7929L54.5842 43.0079V4.83789L27.7732 11.6019L27.3232 5.78589L7.70122 10.0549V17.4119" fill="#D69661"/>
                    <path d="M7.69922 56.569C7.69922 56.569 7.69922 62.936 17.3042 58.903L54.5842 44.68L56.4082 7.95703C41.0562 11.782 23.8622 16.76 9.52422 20.007C9.02622 32.533 8.32622 44.047 7.70122 56.573" fill="#E5B687"/>
                  </svg>
                </button>
                <div>
                  News
                </div>
              </div>

              <div class="child_files" :class="{'active':is_files==5}">
                <button @click="getFiles();is_files=5">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.4925 10.1743L28.0295 4.31533L6.3125 9.03733V55.9333C6.3125 57.6113 7.4035 60.7733 11.5415 60.7733C13.1685 60.7733 15.1475 60.2713 17.3935 59.2893L55.9665 43.9843V3.23633L28.4925 10.1743" fill="#243438"/>
                    <path d="M55.5505 1.71198C47.0085 3.86598 38.4605 6.02498 29.9245 8.17698C29.8225 6.89198 29.7185 5.60298 29.6195 4.31598C29.5315 3.25498 28.6725 2.55398 27.6095 2.78498L5.89247 7.50698C5.20947 7.65698 4.73047 8.35898 4.73047 9.03798V55.73C4.73047 58.36 6.22047 60.985 8.79647 61.878C12.0715 63.017 15.3375 61.798 18.3905 60.581C31.0645 55.561 43.7275 50.541 56.3905 45.511C57.0585 45.247 57.5545 44.747 57.5545 43.982V3.23398C57.5535 2.19198 56.5425 1.45798 55.5445 1.70998L55.5505 1.71198ZM9.14447 58.519C7.72547 57.658 7.89447 55.797 7.89447 54.386V10.304C14.1285 8.94998 20.3605 7.59698 26.5925 6.23898C26.6955 7.55198 26.8005 8.86098 26.9055 10.17C26.9285 10.498 27.0385 10.768 27.1985 10.988C27.5185 11.529 28.1225 11.898 28.9105 11.699C37.4015 9.55398 45.8895 7.41198 54.3805 5.26898V42.917C44.3005 46.915 34.2105 50.915 24.1305 54.915C20.4045 56.39 12.7715 60.724 9.14147 58.515" fill="#B77846"/>
                    <path d="M7.69922 17.4079V55.3669C7.69922 55.3669 7.69922 61.9849 17.3042 57.7929L54.5842 43.0079V4.83789L27.7732 11.6019L27.3232 5.78589L7.70122 10.0549V17.4119" fill="#D69661"/>
                    <path d="M7.69922 56.569C7.69922 56.569 7.69922 62.936 17.3042 58.903L54.5842 44.68L56.4082 7.95703C41.0562 11.782 23.8622 16.76 9.52422 20.007C9.02622 32.533 8.32622 44.047 7.70122 56.573" fill="#E5B687"/>
                  </svg>
                </button>
                <div>
                  Documents
                </div>
              </div>
            </div>
        </div>


        <hr class="m-0" />
      </div>

      <div class="file-manager-container file-manager-col-view">
        <div class="file-manager-row-header">
          <div class="file-item-name pb-2">Filename</div>
          <div class="file-item-changed pb-2">Changed</div>
        </div>

        <div class="file-item" v-for="(item,index) in files" :key="index">
          <div class="file-item-select-bg bg-primary"></div>
          <label class="file-item-checkbox custom-control custom-checkbox">
            <b-icon icon="download" class="custom-control-input" aria-hidden="true"></b-icon>
          </label>
          <a v-if="item.image" class="file-item-img" :href="item.image" download target="_blank" >
            <img :src="item.image" alt="">
          </a>
          <a class="file-item-img" v-else-if="item.pc_image" :href="item.image" download target="_blank" >
            <img :src="item.pc_image" alt="">
          </a>

          <a class="file-item-img" v-else-if="item.main_image" :href="item.main_image" download target="_blank" >
            <img :src="item.main_image" alt="">
          </a>

          <a v-else class="file-item-img" :href="item.file" download target="_blank" >

            <svg width="42" height="54" viewBox="0 0 42 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5671 38.0808H12.6812C13.3931 38.0808 13.916 38.217 14.25 38.4895C14.5884 38.762 14.7576 39.1772 14.7576 39.7354C14.7576 40.1528 14.6675 40.489 14.4873 40.7439C14.3071 40.9988 14.0435 41.1855 13.6963 41.3042C13.3491 41.4185 12.9272 41.4756 12.4307 41.4756H11.5671V38.0808Z" fill="url(#paint0_linear_1714_9912)"/>
              <path d="M24.0916 39.5903C24.342 40.1001 24.4673 40.7505 24.4673 41.5415C24.4673 42.7148 24.1794 43.5981 23.6038 44.1914C23.0281 44.7847 22.158 45.0813 20.9934 45.0813H19.8728V38.0808H21.2241C21.9272 38.0808 22.5183 38.2061 22.9973 38.4565C23.4807 38.7026 23.8455 39.0806 24.0916 39.5903Z" fill="url(#paint1_linear_1714_9912)"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 3.375C0.75 1.51104 2.26104 0 4.125 0H24.375V10.9688C24.375 13.2987 26.2638 15.1875 28.5938 15.1875H41.25V50.625C41.25 52.489 39.739 54 37.875 54H4.125C2.26104 54 0.75 52.489 0.75 50.625V3.375ZM15.509 37.5337C14.9377 37.0239 14.0303 36.769 12.7866 36.769H9.98511V46.4062H11.5671V42.7939H12.5955C13.2986 42.7939 13.8896 42.7104 14.3687 42.5435C14.852 42.3765 15.241 42.1501 15.5354 41.8645C15.8298 41.5745 16.0408 41.2427 16.1682 40.8691C16.3 40.4912 16.366 40.0935 16.366 39.676C16.366 38.7576 16.0803 38.0435 15.509 37.5337ZM25.5088 44.2178C25.9131 43.4883 26.1152 42.5808 26.1152 41.4954C26.1152 40.4626 25.9175 39.5969 25.522 38.8982C25.1265 38.1951 24.5662 37.6655 23.8411 37.3096C23.116 36.9492 22.2546 36.769 21.2571 36.769H18.2908V46.4062H20.967C22.0525 46.4062 22.9797 46.2239 23.7488 45.8591C24.5178 45.49 25.1045 44.9429 25.5088 44.2178ZM28.1917 46.4062H29.7605V42.4314H33.386V41.1064H29.7605V38.1006H33.6365V36.769H28.1917V46.4062Z" fill="url(#paint2_linear_1714_9912)"/>
              <path d="M26.0625 10.9688V0.253447C26.4108 0.39661 26.7355 0.598196 27.0216 0.852494L40.1172 12.4931C40.44 12.78 40.7009 13.1225 40.8906 13.5H28.5938C27.1958 13.5 26.0625 12.3667 26.0625 10.9688Z" fill="url(#paint3_linear_1714_9912)"/>
              <defs>
                <linearGradient id="paint0_linear_1714_9912" x1="10.125" y1="-2.46128e-07" x2="36" y2="59.25" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3C3C55" stop-opacity="0.29"/>
                  <stop offset="1" stop-color="#3C3C55" stop-opacity="0.49"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1714_9912" x1="10.125" y1="-2.46128e-07" x2="36" y2="59.25" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3C3C55" stop-opacity="0.29"/>
                  <stop offset="1" stop-color="#3C3C55" stop-opacity="0.49"/>
                </linearGradient>
                <linearGradient id="paint2_linear_1714_9912" x1="10.125" y1="-2.46128e-07" x2="36" y2="59.25" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3C3C55" stop-opacity="0.29"/>
                  <stop offset="1" stop-color="#3C3C55" stop-opacity="0.49"/>
                </linearGradient>
                <linearGradient id="paint3_linear_1714_9912" x1="10.125" y1="-2.46128e-07" x2="36" y2="59.25" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3C3C55" stop-opacity="0.29"/>
                  <stop offset="1" stop-color="#3C3C55" stop-opacity="0.49"/>
                </linearGradient>
              </defs>
            </svg>
          </a>

          <div class="file-item-changed">02/21/2018</div>
          <div class="file-item-actions btn-group">
            <button type="button" class="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="javascript:void(0)">Rename</a>
              <a class="dropdown-item" href="javascript:void(0)">Move</a>
              <a class="dropdown-item" href="javascript:void(0)">Copy</a>
              <a class="dropdown-item" href="javascript:void(0)">Remove</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        files:[],
        is_files:0
      }
    },
    mounted() {
      this.$http.get('api/files-management')
      .then(res=>{
        this.files=res.data
        console.log(res.data)
      })
    },
    methods:{
      getManagement(){
        this.$http.get('api/files-management')
            .then(res=>{
              this.files=res.data
              console.log(res.data)
            })
      },
      getHeritage(){
        this.$http.get('api/files-heritage/')
            .then(res=>{
              this.files=res.data
              console.log(res.data)
            })
      },
      getMuseum(){
        this.$http.get('api/files-museum/')
            .then(res=>{
              this.files=res.data
              console.log(res.data)
            })
      },
      getObjects(){
        this.$http.get('api/files-object/')
            .then(res=>{
              this.files=res.data
              console.log(res.data)
            })
      },
      getNews(){
        this.$http.get('api/files-news/')
            .then(res=>{
              this.files=res.data
              console.log(res.data)
            })
      },
      getFiles(){
        this.$http.get('api/files-document/')
            .then(res=>{
              this.files=res.data
              console.log(res.data)
            })
      },
      getSlider(){
        this.$http.get('api/files-slider/')
            .then(res=>{
              this.files=res.data
            })
      },
    }
  }
</script>
<style>
.exit_btn{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
}
.file-manager-actions {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.file-manager-actions > * {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.file-manager-container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: 500px;
  overflow-y: scroll;
}
.file-item {
  position: relative;
  z-index: 1;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border: 1px solid #eee;
  cursor: pointer;
}
.file-item:hover,
.file-item.focused {
  border-color: rgba(0, 0, 0, 0.05);
}
.file-item.focused {
  z-index: 2;
}
.file-item * {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  text-decoration:none;
}
.dark-style .file-item:hover,
.dark-style .file-item.focused {
  border-color: rgba(255, 255, 255, 0.2);
}
.file-item-checkbox {
  margin: 0 !important;
}
.file-item-select-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
.file-item-img {
  background-color: transparent;
  background-position: center center;
  background-size: cover;
}
.file-item-name {
  display: block;
  overflow: hidden;
}
.file-manager-col-view .file-item {
  margin: 0 0.25rem 0.25rem 0;
  width: 9rem;
  text-align: center;
  height: 150px;
}
[dir="rtl"] .file-manager-col-view .file-item {
  margin-right: 0;
  margin-left: 0.25rem;
}
.file-manager-col-view .file-item-img,
.file-manager-col-view .file-item-icon {
  display: block;
  height: 100%;
  font-size: 2.5rem;
  line-height: 4rem;
}

.file-item-img img{
  height: 100%;
  object-fit: cover;
}
.file-manager-col-view .file-item-level-up {
  font-size: 1.5rem;
}
.file-manager-col-view .file-item-checkbox,
.file-manager-col-view .file-item-actions {
  position: absolute;
  top: 6px;
}
.file-manager-col-view .file-item-checkbox {
  left: 6px;
}
[dir="rtl"] .file-manager-col-view .file-item-checkbox {
  right: 6px;
  left: auto;
}
.file-manager-col-view .file-item-actions {
  right: 6px;
}
[dir="rtl"] .file-manager-col-view .file-item-actions {
  right: auto;
  left: 6px;
}
.file-manager-col-view .file-item-name {
  width: 100%;
}
.file-manager-col-view .file-manager-row-header,
.file-manager-col-view .file-item-changed {
  display: none;
}
.file-manager-row-view .file-manager-row-header,
.file-manager-row-view .file-item {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 0 0.125rem 0;
  padding: 0.25rem 3rem 0.25rem 2.25em;
  width: 100%;
}
[dir="rtl"] .file-manager-row-view .file-manager-row-header,
[dir="rtl"] .file-manager-row-view .file-item {
  padding-right: 2.25em;
  padding-left: 3rem;
}
.file-manager-row-view .file-item-img,
.file-manager-row-view .file-item-icon {
  display: block;
  margin: 0 1rem;
  width: 2rem;
  height: 2rem;
  text-align: center;
  font-size: 1.25rem;
  line-height: 2rem;
}
.file-manager-row-view .file-item-level-up {
  font-size: 1rem;
}
.file-manager-row-view .file-item-checkbox,
.file-manager-row-view .file-item-actions {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.file-manager-row-view .file-item-checkbox {
  left: 10px;
}
[dir="rtl"] .file-manager-row-view .file-item-checkbox {
  right: 10px;
  left: auto;
}
.file-manager-row-view .file-item-actions {
  right: 10px;
}
[dir="rtl"] .file-manager-row-view .file-item-actions {
  right: auto;
  left: 10px;
}
.file-manager-row-view .file-item-changed {
  display: none;
  margin-left: auto;
  width: 10rem;
}
[dir="rtl"] .file-manager-row-view .file-item-changed {
  margin-right: auto;
  margin-left: 0;
}
.file-manager-row-view .file-item-name {
  width: calc(100% - 4rem);
}
.file-manager-row-view .file-manager-row-header {
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  font-weight: bold;
}
.file-manager-row-view .file-manager-row-header .file-item-name {
  margin-left: 4rem;
}
[dir="rtl"] .file-manager-row-view .file-manager-row-header .file-item-name {
  margin-right: 4rem;
  margin-left: 0;
}
.light-style .file-item-name {
  color: #4e5155 !important;
}
.light-style .file-item.selected .file-item-select-bg {
  opacity: 0.15;
}
@media (min-width: 768px) {
  .light-style .file-manager-row-view .file-item-changed {
    display: block;
  }
  .light-style .file-manager-row-view .file-item-name {
    width: calc(100% - 15rem);
  }
}
@media (min-width: 992px) {
  .light-style .file-manager-col-view .file-item-checkbox,
  .light-style .file-manager-col-view .file-item-actions {
    opacity: 0;
  }
  .light-style .file-manager-col-view .file-item:hover .file-item-checkbox,
  .light-style .file-manager-col-view .file-item.focused .file-item-checkbox,
  .light-style .file-manager-col-view .file-item.selected .file-item-checkbox,
  .light-style .file-manager-col-view .file-item:hover .file-item-actions,
  .light-style .file-manager-col-view .file-item.focused .file-item-actions,
  .light-style .file-manager-col-view .file-item.selected .file-item-actions {
    opacity: 1;
  }
}
.material-style .file-item-name {
  color: #4e5155 !important;
}
.material-style .file-item.selected .file-item-select-bg {
  opacity: 0.15;
}
@media (min-width: 768px) {
  .material-style .file-manager-row-view .file-item-changed {
    display: block;
  }
  .material-style .file-manager-row-view .file-item-name {
    width: calc(100% - 15rem);
  }
}
@media (min-width: 992px) {
  .material-style .file-manager-col-view .file-item-checkbox,
  .material-style .file-manager-col-view .file-item-actions {
    opacity: 0;
  }
  .material-style .file-manager-col-view .file-item:hover .file-item-checkbox,
  .material-style .file-manager-col-view .file-item.focused .file-item-checkbox,
  .material-style .file-manager-col-view .file-item.selected .file-item-checkbox,
  .material-style .file-manager-col-view .file-item:hover .file-item-actions,
  .material-style .file-manager-col-view .file-item.focused .file-item-actions,
  .material-style .file-manager-col-view .file-item.selected .file-item-actions {
    opacity: 1;
  }
}
.dark-style .file-item-name {
  color: #fff !important;
}
.dark-style .file-item.selected .file-item-select-bg {
  opacity: 0.15;
}
@media (min-width: 768px) {
  .dark-style .file-manager-row-view .file-item-changed {
    display: block;
  }
  .dark-style .file-manager-row-view .file-item-name {
    width: calc(100% - 15rem);
  }
}
@media (min-width: 992px) {
  .dark-style .file-manager-col-view .file-item-checkbox,
  .dark-style .file-manager-col-view .file-item-actions {
    opacity: 0;
  }
  .dark-style .file-manager-col-view .file-item:hover .file-item-checkbox,
  .dark-style .file-manager-col-view .file-item.focused .file-item-checkbox,
  .dark-style .file-manager-col-view .file-item.selected .file-item-checkbox,
  .dark-style .file-manager-col-view .file-item:hover .file-item-actions,
  .dark-style .file-manager-col-view .file-item.focused .file-item-actions,
  .dark-style .file-manager-col-view .file-item.selected .file-item-actions {
    opacity: 1;
  }
}
.files_buttons button{
  background: none;
  border: 0;
  outline: none;
}
.child_files{
  margin-right: 30px;
  padding: 10px;
  text-align: center;
}
.child_files.active{
  border: 1px solid #0ea271;
}
.files-buttons{
  height: 40px;
}
</style>