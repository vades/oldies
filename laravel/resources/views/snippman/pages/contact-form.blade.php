<section>
  <p>{{__('contact_description')}}</p>
<form id="contact_form" action="{{config('snippman.contact_form_api')}}">
  <input type="hidden" id="webname" name="webname" value="snippman.com" />
    <fieldset>
      <div class="input-wrap">
        <label for="from">{{__('email_address')}}</label>
        <input class="w-100 w-m-50" type="email" id="from" name="from" data-parsley-trigger="change" required="" />
      </div>
      <div class="input-wrap">
        <label for="message">{{__('message')}}</label>
        <textarea class="w-100" id="message" name="message" cols="30" rows="10" data-parsley-trigger="change" required=""></textarea>
      </div>
    </fieldset>
    <fieldset>
      <button id="button_submit" type="submit" class="button is-info"><span>{{__('send_email')}}</span></button>
    </fieldset>
  </form>
</section>
