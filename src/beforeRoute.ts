import Vue from 'vue';
import { createDecorator } from 'vue-class-component';
import { Route, NavigationGuard, RawLocation } from 'vue-router';

type beforeRoute =
  | 'beforeRouteEnter'
  | 'beforeRouteUpdate'
  | 'beforeRouteLeave';

function create(before: beforeRoute) {
  function helper(target: Vue, name: string, descriptor: PropertyDescriptor) {
    createDecorator((options, key) => {
      options[before] = descriptor.value;
    })(target, before);
  }
  return helper;
}

export const Enter = create('beforeRouteEnter');
export const Update = create('beforeRouteUpdate');
export const Leave = create('beforeRouteLeave');
