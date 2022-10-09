import $ from 'jquery';
import './anchorList.scss';

class AnchorFun {
  constructor() {
    this.$header = $('.com-header');
    this.$anchorList = $('.category-list');
    this.$anchorContent = $('.anchor-content-list');
    this.anchorLinkEle = 'a[href^="#"]';
    this.scrollTop = 0;
    this.anchorFunInit();
  }

  anchorFunInit() {
    $(window).on('load', ()=> {
      this.setAnchorToTheTop();
      this.HandleAnchorEvents();
      this.scrollFun();
    });
  }

  srollAnimate(hashId) {
    this.scrollTop =
      $(hashId).offset().top -
      (!this.$header.length ? 0 : this.$header.height()) -
      (!this.$header.length ? 0 : this.$header.position().top) -
      40;
    $('html, body').animate(
      {
        scrollTop: this.scrollTop,
      },
      100,
    );
  }

  setAnchorToTheTop(hashId) {
    if (hashId) {
      this.srollAnimate(hashId);
    } else {
      const id = window.location.hash;
      if (id && $(id).length) {
        this.srollAnimate(id);
      }
    }
  }

  HandleAnchorEvents() {
    $(this.anchorLinkEle).click((el) => {
      this.setAnchorToTheTop($(el.currentTarget).attr('href'));
    });
  }

  clearAchorActive(anchorTitleArr) {
    anchorTitleArr.each((index, el) => {
      if (index !== this.activeAchorIndex) {
        $(`a[href='${$(el).attr('href')}']`).removeClass('active');
      }
    });
  }

  setAnchorActive() {
    if (!this.$anchorList.find(this.anchorLinkEle).length) {
      return;
    }
    const headerHeight = !this.$header.length ? 1 : this.$header.outerHeight();
    const headerPositionTop = !this.$header.length ? 1 : this.$header.position().top;
    const winScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const anchorTitleArr = this.$anchorList.find('a[href^="#"]');
    let active = false;
    anchorTitleArr.each((index, el) => {
      const id = $(el).attr('href');
      const anchorTitleTop =
        $(id).offset().top - winScrollTop - headerPositionTop - headerHeight;
      if (anchorTitleTop < 40 && anchorTitleTop > 0) {
        active = true;
        this.activeAchorIndex = index;
        this.activeAchorId = id;
        $(`a[href='${this.activeAchorId}']`).addClass('active');
        this.clearAchorActive(anchorTitleArr);
      }
    });
    if (!active && !this.activeAchorIndex && winScrollTop) {
      this.$anchorList.find(this.anchorLinkEle).first().addClass('active');
    }
    setTimeout(() => {
      if (typeof winScrollTop === 'undefined') {
        this.activeAchorIndex = null;
        this.clearAchorActive(anchorTitleArr);
        this.$anchorList.find(this.anchorLinkEle).first().addClass('active');
      }
    }, 301);
  }

  scrollFun() {
    $(window).on('load scroll', (el) => {
      this.isPositionTop = false;
      this.scrollBottom();

      if (el.type === 'load') {
        setTimeout(() => {
          this.setAnchorToTheTop();
        }, 0);
      }
    });
  }

  scrollBottom() {
    if (!this.isMobile) {
      const headerHeight = !this.$header.length ? 0 : this.$header.outerHeight();
      const productHeight = this.$anchorContent.outerHeight();
      const headerPositionTop = !this.$header.length ? 0 : this.$header.position().top;
      let winScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const productListOffsetTop =
        this.$anchorContent.offset().top - winScrollTop;
      this.isPositionTop =
        productListOffsetTop < headerHeight + headerPositionTop + 50 &&
        productHeight + productListOffsetTop >
          headerHeight + headerPositionTop + 50;
      this.$anchorList.parent().toggleClass('active-top', this.isPositionTop);
      this.$anchorContent
        .parent()
        .toggleClass('active-top', this.isPositionTop);
      const scroll =
        productHeight +
        this.$anchorContent.offset().top -
        (winScrollTop +
          headerHeight +
          headerPositionTop);
      const $dropdownContent = this.$anchorList.find('.dropdown-content')[0];
      const dropdownContentHeight =
        $dropdownContent !== undefined
          ? $dropdownContent.clientHeight +
            headerHeight +
            headerPositionTop +
            15
          : headerHeight + headerPositionTop + 15;
      let isBottomForMovetop = false;
      if (
        document.body.clientHeight - headerHeight - headerPositionTop + 15 <
        dropdownContentHeight
      ) {
        isBottomForMovetop = true;
      }
      this.$anchorList.parent().toggleClass('bottom', isBottomForMovetop);
      this.isScrollFooter = scroll < 0;
      this.$anchorList
        .parent()
        .toggleClass('active-bottom', this.isScrollFooter);
      this.$anchorContent
        .parent()
        .toggleClass('active-bottom', this.isScrollFooter);
      this.setAnchorActive();
    }
  }
}

const anchorFun = new AnchorFun();

export {anchorFun};

