document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.cate_menu .index_list li');
  const categoryWraps = document.querySelectorAll('.category_wrap');

  menuItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
          e.preventDefault();
          const cateId = this.getAttribute('data-cate');

          // 모든 메뉴 항목에서 active 클래스 제거
          menuItems.forEach(function (menuItem) {
              menuItem.classList.remove('active');
          });

          // 클릭한 항목에 active 클래스 추가
          this.classList.add('active');

          // 모든 카테고리 랩에서 on 클래스 제거
          categoryWraps.forEach(function (wrap) {
              wrap.classList.remove('on');
          });

          // 해당하는 카테고리 랩에 on 클래스 추가
          const targetWrap = document.getElementById(cateId);
          if (targetWrap) {
              targetWrap.classList.add('on');
          }
      });
  });
});
