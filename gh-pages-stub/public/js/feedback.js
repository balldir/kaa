/*
 * Copyright 2014-2017 CyberVision, Inc.
 * <p/>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p/>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p/>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
FEEDBACK_FORM_SELECTOR="#feedbackForm"
FEEDBACK_SUBMIT_BUTTON_SELECTOR="#feedbackSubmit"
FEEDBACK_RESULT_SELECTOR="#feedbackResult"
FEEDBACK_INPUT_FORM_SELECTOR='#feedbackAsk'
FEEDBACK_ANIMATION_TIME=500
COOKIES_SELECTOR='jekver-feedback'
EXPIRE_TIMEOUT=30
ACTIVE_FEEDBACK_TYPE_SELECTOR='#feedbackForm .btn.btn-primary.active > input'
FEEDBACK_EMAIL_SELECTOR='#feedbackEmail1'
FEEDBACK_TEXT_SELECTOR='#feedbackTextarea'

$(document).ready(function(){
  /* Check cache and show feedback field if necessary*/
  if (Cookies.get(COOKIES_SELECTOR) == null) {
    $(FEEDBACK_FORM_SELECTOR).show();
  }

  $(FEEDBACK_SUBMIT_BUTTON_SELECTOR).click(function(){
    /* Check cache and show feedback field if necessary */
    TITLE=document.title;
    VERSION = UTILS.getVersionFromURL();
    FEEDBACK_TYPE = $(ACTIVE_FEEDBACK_TYPE_SELECTOR)[0].id;
    FEEDBACK_EMAIL = $(FEEDBACK_EMAIL_SELECTOR)[0].value;
    FEEDBACK_TEXT = $(FEEDBACK_TEXT_SELECTOR)[0].value;

    Analytic.getInstance().sendFeedback(FEEDBACK_TYPE,VERSION,TITLE,FEEDBACK_EMAIL,FEEDBACK_TEXT);
    Cookies.set(COOKIES_SELECTOR,true,  { expires: EXPIRE_TIMEOUT, path: UTILS.getPathname() });
    $(FEEDBACK_INPUT_FORM_SELECTOR).hide(FEEDBACK_ANIMATION_TIME);
    $(FEEDBACK_RESULT_SELECTOR).show(FEEDBACK_ANIMATION_TIME);
  })
})
